const Landing = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                CloudCTF
            </h1>
            <p className="mt-4 text-gray-400">Master Cloud Security</p>
            <a href="/dashboard" className="mt-8 px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition">
                Start Hacking
            </a>
        </div>
    );
};

export default Landing;
