/**
 * Spotify API Integration Helper
 * Xử lý dữ liệu từ Spotify Web API (Track API, Embed, Search)
 */

export interface SpotifyTrackResponse {
  id: string;
  name: string;
  uri: string;
  duration_ms: number;
  external_urls: {
    spotify: string;
  };
  album: {
    name: string;
    release_date: string;
    images: Array<{
      url: string;
      height: number;
      width: number;
    }>;
    external_urls: {
      spotify: string;
    };
  };
  artists: Array<{
    id: string;
    name: string;
    external_urls: {
      spotify: string;
    };
  }>;
  is_playable?: boolean;
}

/**
 * Phân tích và chuyển đổi mọi định dạng đầu vào (iframe HTML, URL track/album/playlist, URI, ID)
 * thành Spotify Embed URL hợp lệ chuẩn 100%
 */
export function resolveSpotifyEmbedUrl(input?: string | null): string | null {
  if (!input) return null;
  const trimmed = input.trim();
  if (!trimmed) return null;

  // 1. Dạng mã nhúng iframe HTML: <iframe src="https://open.spotify.com/embed/..." ...>
  if (trimmed.includes("<iframe") && trimmed.includes("src=")) {
    const srcMatch = trimmed.match(/src=["']([^"']+)["']/i);
    if (srcMatch && srcMatch[1]) {
      return srcMatch[1];
    }
  }

  // 2. Đã là Embed URL hoàn chỉnh
  if (trimmed.includes("open.spotify.com/embed/")) {
    return trimmed;
  }

  // 3. Track URL: https://open.spotify.com/track/ID?si=...
  if (trimmed.includes("open.spotify.com/track/")) {
    const after = trimmed.split("/track/")[1];
    const trackId = after.split(/[?/"'&>\s]/)[0];
    if (trackId && trackId.length >= 10) {
      return `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`;
    }
  }

  // 4. Album URL: https://open.spotify.com/album/ID?si=...
  if (trimmed.includes("open.spotify.com/album/")) {
    const after = trimmed.split("/album/")[1];
    const albumId = after.split(/[?/"'&>\s]/)[0];
    if (albumId && albumId.length >= 10) {
      return `https://open.spotify.com/embed/album/${albumId}?utm_source=generator&theme=0`;
    }
  }

  // 5. Playlist URL: https://open.spotify.com/playlist/ID?si=...
  if (trimmed.includes("open.spotify.com/playlist/")) {
    const after = trimmed.split("/playlist/")[1];
    const playlistId = after.split(/[?/"'&>\s]/)[0];
    if (playlistId && playlistId.length >= 10) {
      return `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`;
    }
  }

  // 6. Spotify URI: spotify:track:ID hoặc spotify:album:ID
  if (trimmed.startsWith("spotify:track:")) {
    const trackId = trimmed.replace("spotify:track:", "").split(/[?/"'&>\s]/)[0];
    return `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`;
  }
  if (trimmed.startsWith("spotify:album:")) {
    const albumId = trimmed.replace("spotify:album:", "").split(/[?/"'&>\s]/)[0];
    return `https://open.spotify.com/embed/album/${albumId}?utm_source=generator&theme=0`;
  }

  // 7. Chuỗi ID thuần (15-30 ký tự alphanumeric)
  if (/^[a-zA-Z0-9]{15,30}$/.test(trimmed)) {
    return `https://open.spotify.com/embed/track/${trimmed}?utm_source=generator&theme=0`;
  }

  return null;
}

/**
 * Trích xuất Spotify Track ID từ URL hoặc URI
 */
export function extractSpotifyTrackId(input: string): string {
  if (!input) return "";
  const trimmed = input.trim();

  // Dạng iframe HTML hoặc URL chứa /track/
  if (trimmed.includes("/track/")) {
    const afterTrack = trimmed.split("/track/")[1];
    const match = afterTrack.match(/^([a-zA-Z0-9]{15,30})/);
    if (match) return match[1];
    return afterTrack.split(/[?/"'&>\s]/)[0];
  }

  // Dạng URI: spotify:track:11dFghVXANMlKmJXsNCbNl
  if (trimmed.includes("spotify:track:")) {
    const after = trimmed.split("spotify:track:")[1];
    const match = after.match(/^([a-zA-Z0-9]{15,30})/);
    if (match) return match[1];
    return after.split(/[?/"'&>\s]/)[0];
  }

  // Nếu là ID 15-30 ký tự chữ số
  if (/^[a-zA-Z0-9]{15,30}$/.test(trimmed)) {
    return trimmed;
  }

  return "";
}

/**
 * Chuyển đổi duration_ms (milliseconds) thành định dạng mm:ss
 */
export function formatDurationFromMs(durationMs: number): string {
  if (!durationMs || durationMs <= 0) return "03:30";
  const totalSeconds = Math.floor(durationMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

/**
 * Chuyển đổi dữ liệu Spotify Track Response thành dữ liệu chuẩn cho website Moe Music
 */
export function parseSpotifyTrackData(track: SpotifyTrackResponse) {
  const coverImage = track.album?.images?.[0]?.url || "";
  const artistNames = track.artists?.map((a) => a.name).join(", ") || "";
  const releaseYear = track.album?.release_date
    ? track.album.release_date.split("-")[0]
    : new Date().getFullYear().toString();

  return {
    spotifyTrackId: track.id,
    title: track.name,
    artist: artistNames,
    duration: formatDurationFromMs(track.duration_ms),
    year: releaseYear,
    coverImageUrl: coverImage,
    spotifyUrl: track.external_urls?.spotify || `https://open.spotify.com/track/${track.id}`,
    embedUrl: `https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0`,
  };
}

/**
 * Gọi Spotify API để lấy thông tin Track bằng Token
 */
export async function fetchSpotifyTrack(trackId: string, accessToken: string): Promise<SpotifyTrackResponse | null> {
  const cleanId = extractSpotifyTrackId(trackId);
  if (!cleanId || !accessToken) return null;

  try {
    const res = await fetch(`https://api.spotify.com/v1/tracks/${cleanId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      console.warn(`Spotify API error ${res.status}: ${res.statusText}`);
      return null;
    }

    const data: SpotifyTrackResponse = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch Spotify track:", err);
    return null;
  }
}
