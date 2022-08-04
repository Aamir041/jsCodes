const blogger = {
    name : "ninja0x1",
    titles : ["How to master shadow ninjutsu", "How to beat a hot kunoichi", "Beginner's guide to nindo"],
    location: "Bhosari",
    email: "ninja0x1@konoha.nj",
    written: function(){
        for(let i=0; i<this.titles.length; i++){
            console.log(`${this.name} has wriiten a blog with title ${this.titles[i].toUpperCase()}`)
        }
    },
    totalBlogs: function(){
        console.log(`Total blogs written by author ${this.name} are ${this.titles.length}`)
    }, 
    showStat: function(){
        for(let i = 0; i<blogStat.length; i++){
            console.log(`${blogStat[i]["blog"].toUpperCase()} has ${blogStat[i]["likes"]}`)
        }
    }

}

const blogStat = [
    {blog: "How to master shadow ninjutsu",likes: 78},
    {blog: "How to beat a hot kunoichi",likes: 7000},
    {blog: "Beginner's guide to nindo",likes:452}
]

blogger.written()
blogger.totalBlogs()
blogger.showStat()