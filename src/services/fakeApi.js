

export default {

    getUserInfo: () => {

        return (
            {
                id: 1,
                name: "Hopeful",
                description: "Storytelling AI",

                socialmedia: {
                    instagram: {
                        userId: 1,
                        likes: 120,
                        views: 650,
                        comments: 68
                    },
                    facebook: {
                        userId: 1,
                        likes: 120,
                        views: 650,
                        comments: 68
                    },
                    twitter: {
                        userId: 1,
                        likes: 120,
                        views: 650,
                        comments: 68
                    },
                    linkedin: {
                        userId: 1,
                        likes: 120,
                        views: 650,
                        comments: 68
                    }

                }



            }
        )

    }
    ,

    getSocialInfo: () => {
        return (
            [
                {
                    userId: 1,
                    name: "instagram",
                    likes: 120,
                    views: 650,
                    comments: 68
                },
                {
                    userId: 1,
                    name: "facebook",
                    likes: 100,
                    views: 500,
                    comments: 68
                },
                {
                    userId: 1,
                    name: "twitter",
                    likes: 50,
                    views: 70,
                    comments: 5
                }
            ]
        )
    },

    getDonations: () => {

        return (
            {
                jan: 25000,
                fev: 15000,
                Mar: 9000,
                Apr: 12000,
                Mai: 11500,
                Jun: 13000
            }
        )
    }

}


