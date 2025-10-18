export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-6xl font-bold mb-4 text-blue-400">404</h1>
      <p className="text-gray-400 mb-6">Trang bạn tìm không tồn tại.</p>
      <a
        href="/"
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition"
      >
        Quay lại trang chủ
      </a>
    </div>
  );
}
