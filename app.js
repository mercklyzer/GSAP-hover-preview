const select = (selector) => document.querySelector(selector)

window.onload = () => {
    let navItems = document.querySelectorAll('.navigation-item');
    
    navItems.forEach((navItem) => {
        let t1

        navItem.addEventListener('mouseover', () => {
            t1 = gsap.timeline()

            console.log("hovered");           

            t1.to('.project-preview', {
                width: '600px',
                duration: 1,
                ease: Expo.easeInOut
            })
        })

        navItem.addEventListener('mouseout', () => {
            t1 = gsap.timeline()

            t1.to('.project-preview', {
                width: 0,
                duration: 1,
                ease: Expo.easeInOut
            })
        })
    })

    for(let i = 1; i <= 8; i++){
        select(`.navigation-link-${i}`).addEventListener('mouseover', () => {
            select('.project-preview').style['background-image'] = `url(./images/img-${i}.jpg)`

        })
    }

    window.onscroll = () => {
        let scroll = window.pageYOffset
        let wh = window.innerHeight
        let dh = document.documentElement.scrollHeight



        let scrollPercent = (scroll / (dh - wh) * 100)
        console.log(scrollPercent);

        select('.progress-bar').style['height'] = `${scrollPercent}%`
    }
}


