export default {

    // Smooth Scrolling
    smoothScroll: (e) => {
        let target = e.target.getAttribute('data-scroll-to');
        let duration = 500;
        let selectedTarget = document.querySelector(target);
        let targetPosition = selectedTarget.getBoundingClientRect().top;
        let startPosition = window.pageYOffset;
        let distance = targetPosition - startPosition;
        let startTime = null;

        console.log("Target Position: " + targetPosition);
        console.log("Start Position: " + startPosition);
    
        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            let timeElapsed = currentTime - startTime;
            let run = ease(timeElapsed, startPosition, distance, duration)
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
    
        // quartic easing in/out - acceleration until halfway, then deceleration
        const ease = (t, b, c, d) => {
            t /= d/2;
            if (t < 1) return c/2*t*t*t*t + b;
            t -= 2;
            return -c/2 * (t*t*t*t - 2) + b;
        };
    
        requestAnimationFrame(animation);
        
    },
    
    scrollToSection: (e) => {
        e.preventDefault();
        let target = e.target.getAttribute('data-scroll-to');
        let element = document.getElementById(target);
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    },
};