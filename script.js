const sectionOne = document.querySelector(".section1");
const sections = document.querySelectorAll('.section');

const options = {
    root: null, //viewport, default null=> 
    threshold: 0, // 1: full element should be in viewport, 0: any portion in viewport
    rootMargin: "-50%" // can be used to tweak intersection point

};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        //console.log(entry.target);
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.toggle('dark');
        // to stop observing(useful for lazy loading)
        observer.unobserve(entry.target);


    })
}, options);

sections.forEach(section => {

    observer.observe(section);
});


//? https://medium.com/swlh/intersection-observer-in-javascript-efcf13c154ce

/*

root → parent element of the target, which is used for checking the visibility of the target in the viewport of the parent element. If we pass null, then browser viewport(document) will act as a root.

rootMargin → Margin around the root. Margin will be added to the target bounding area before finding the intersection.

threshold → At what percentage of the target's visibility the observer's callback should be executed. We can pass either a single value or an array. The values can be 0–1 . If you pass

1 → The callback will be executed when the target is completely visible.

0 → As soon as even one pixel is visible, the callback will be executed. Default value is 0 .

0.5 → . If you only want to detect when the visibility of the target is more than 50%.

[0, 0.50, 1 ] → This will execute callback three-time

    When one pixel of the target is visible
    When 50% of the target is visible
    When the target is completely visible in the viewport





*/