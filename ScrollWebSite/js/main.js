gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch != 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true, 
    })

    gsap.fromTo('.hero-section', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero-section',
			start: 'center',
			end: '500',
			scrub: true
		}
	})
    // 1.05.32

    let itemsList = gsap.utils.toArray('.left .portfolio__item')

    itemsList.forEach(item => {
        gsap.fromTo(item, {x: -50, opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                start: '-700',
                end: '-100',
                trigger: item,
                scrub: true 
            }
        })
    })


    let itemsListRight = gsap.utils.toArray('.right .portfolio__item')

    itemsListRight.forEach(item => {
        gsap.fromTo(item, {x:50, opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                start: '-700',
                end: '-100',
                trigger: item,
                scrub: true 
            }
        })
    })
    
}

