import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto bg-gradient-to-b from-gray-900 to-black">
      {/* Profile Card Section */}
      <section className="bg-gray-800 rounded-lg shadow-xl p-8 mb-8 border border-gray-700 hover:border-purple-500 transition-all duration-300">
        <div className="flex items-start gap-8">
          {/* Profile Image */}
          <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center p-1">
            <div className="w-full h-full bg-gray-800 rounded-full overflow-hidden">
              <Image
                src="/profile.png"
                alt="Profile picture"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                I AM
              </h2>
              <p className="text-lg text-white">이름: 이프로</p>
              <p className="text-gray-400">
                포지션: FE Developer(jr)
              </p>
            </div>

            {/* Contact Info */}
            <div className="mb-6">
              <h3 className="font-bold mb-2 text-purple-400">Contact</h3>
              <p className="text-sm text-gray-300">Email: idepro@naver.com</p>
              <p className="text-sm text-gray-300">Phone: +082-1234-5678</p>
            </div>

            {/* Channel Links */}
            <div>
              <h3 className="font-bold mb-2 text-purple-400">Channel</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-sm w-16 text-gray-300">SNS:</span>
                  <div className="flex-1 h-8 border border-gray-600 rounded bg-gray-700 hover:border-purple-500 transition-all duration-300"></div>
                </div>
                <div className="flex items-center">
                  <span className="text-sm w-16 text-gray-300">Github:</span>
                  <div className="flex-1 h-8 border border-gray-600 rounded bg-gray-700 hover:border-purple-500 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduce Section */}
      <section className="bg-gray-800 rounded-lg shadow-xl p-8 mb-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
        <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
          Introduce
        </h2>
        <div className="border border-gray-700 rounded-lg p-4 bg-gray-700/50">
          <p className="text-gray-300">
            간단한 자기소개 및 인사말
          </p>
        </div>
      </section>

      {/* Tech Skills Section */}
      <section className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
        <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">
          Tech Skill
        </h2>
        <div className="flex gap-3 flex-wrap">
          <span className="px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-yellow-400/10 border border-yellow-500/50 text-yellow-400 rounded-full text-sm hover:from-yellow-400/30 hover:to-yellow-400/20 transition-all duration-300 shadow-lg shadow-yellow-500/10">
            JS
          </span>
          <span className="px-4 py-2 bg-gradient-to-r from-blue-400/20 to-blue-400/10 border border-blue-500/50 text-blue-400 rounded-full text-sm hover:from-blue-400/30 hover:to-blue-400/20 transition-all duration-300 shadow-lg shadow-blue-500/10">
            TS
          </span>
          <span className="px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-cyan-400/10 border border-cyan-500/50 text-cyan-400 rounded-full text-sm hover:from-cyan-400/30 hover:to-cyan-400/20 transition-all duration-300 shadow-lg shadow-cyan-500/10">
            React
          </span>
          <span className="px-4 py-2 bg-gradient-to-r from-pink-400/20 to-pink-400/10 border border-pink-500/50 text-pink-400 rounded-full text-sm hover:from-pink-400/30 hover:to-pink-400/20 transition-all duration-300 shadow-lg shadow-pink-500/10">
            TailwindCSS
          </span>
          <span className="px-4 py-2 bg-gradient-to-r from-purple-400/20 to-purple-400/10 border border-purple-500/50 text-purple-400 rounded-full text-sm hover:from-purple-400/30 hover:to-purple-400/20 transition-all duration-300 shadow-lg shadow-purple-500/10">
            Premierepro
          </span>
        </div>
      </section>
    </main>
  );
}
