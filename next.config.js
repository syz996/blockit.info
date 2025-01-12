module.exports = {
    async redirects() {
        return [
            {
                source: '/game', // 用户访问的路径
                destination: '/game', // 要重定向到的路径
                permanent: true, // 是否为永久重定向 (301)
            },
            {
                source: '/leaderboard', // 用户访问的路径
                destination: '/leaderboard', // 要重定向到的路径
                permanent: true, // 是否为永久重定向 (301)
            },
            {
                source: '/tutorial', // 用户访问的路径
                destination: '/tutorial', // 要重定向到的路径
                permanent: true, // 是否为永久重定向 (301)
            },
            {
                source: '/faq', // 用户访问的路径
                destination: '/faq', // 要重定向到的路径
                permanent: true, // 是否为永久重定向 (301)
            },
        ];
    },
};


