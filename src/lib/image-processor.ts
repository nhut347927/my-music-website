/**
 * Image Processor Utility for Moe Music
 * Automatically resizes images to maximum HD resolution (1280x720 max bounds)
 * and converts them to optimized WebP format encoded in Base64 for database storage.
 */

export interface ProcessedImageResult {
  base64: string;
  originalSize: number; // in bytes
  processedSize: number; // in bytes
  savingsPercent: number; // percentage reduced
  width: number;
  height: number;
  format: 'image/webp';
  filename: string;
}

export interface ImageProcessingOptions {
  maxWidth?: number; // default 1280 (HD width)
  maxHeight?: number; // default 720 (HD height)
  quality?: number; // 0.0 - 1.0 (default 0.82)
}

/**
 * Process any image File into an HD-limited WebP Base64 string
 */
export async function processImageToWebPBase64(
  file: File,
  options: ImageProcessingOptions = {}
): Promise<ProcessedImageResult> {
  const { maxWidth = 1280, maxHeight = 720, quality = 0.82 } = options;

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = () => reject(new Error('Không thể đọc file ảnh'));
    reader.onload = () => {
      const img = new Image();

      img.onerror = () => reject(new Error('Định dạng ảnh không hợp lệ hoặc bị lỗi'));
      img.onload = () => {
        try {
          let { width, height } = img;

          // Calculate aspect ratio preserving dimensions constrained to maxWidth x maxHeight
          const ratio = Math.min(maxWidth / width, maxHeight / height, 1); // Never upscale
          const targetWidth = Math.round(width * ratio);
          const targetHeight = Math.round(height * ratio);

          // Create offscreen canvas
          const canvas = document.createElement('canvas');
          canvas.width = targetWidth;
          canvas.height = targetHeight;

          const ctx = canvas.getContext('2d');
          if (!ctx) {
            return reject(new Error('Không thể khởi tạo Canvas 2D context'));
          }

          // Use high quality image smoothing
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';

          // Draw scaled image
          ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

          // Export as WebP
          const base64 = canvas.toDataURL('image/webp', quality);

          // Calculate sizes
          const originalSize = file.size;
          // Approximate size of base64 in bytes: (len * 3/4) - padding
          const processedSize = Math.round((base64.length - 'data:image/webp;base64,'.length) * 0.75);
          const savingsPercent = originalSize > 0 
            ? Math.max(0, Math.round(((originalSize - processedSize) / originalSize) * 100))
            : 0;

          resolve({
            base64,
            originalSize,
            processedSize,
            savingsPercent,
            width: targetWidth,
            height: targetHeight,
            format: 'image/webp',
            filename: file.name.replace(/\.[^/.]+$/, '') + '.webp',
          });
        } catch (err) {
          reject(err);
        }
      };

      img.src = reader.result as string;
    };

    reader.readAsDataURL(file);
  });
}

/**
 * Format bytes to readable string (e.g. 1.2 MB, 340 KB)
 */
export function formatBytes(bytes: number, decimals = 1): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
