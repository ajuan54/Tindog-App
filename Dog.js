// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
    setRejectStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = !true
    }
    
    getLikeBadgeHtml() {
        return `<img src="images/badge-like.png" />`
    }
        getNopeBadgeHtml() {
        return `<img src="images/badge-nope.png" />`
    }

    getDogHtml(){
        const {name, avatar, age, bio } = this
        return `
        <div class="feature-suggestion">
                <img class="dog-img" src="${avatar}">
                <div class="dog-info">
                    <h4> ${name}, ${age} </h4>
                    <div class="dog-bio">
                        ${bio}
                    </div>
                </div>
            </div>`

    }
}

export default Dog;