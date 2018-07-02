(function () {

    const iconMobile = document.getElementById('icon__mobile');
    const navigation = document.getElementById('navigation');

    const removeAddNavigation = (content) => {
        content.classList.toggle('remove__navigation');
    };

    iconMobile.addEventListener('click', () => {
        removeAddNavigation(navigation);
    });

    const accordionToggles = document.querySelectorAll('.js-accordionTrigger');
    let setAria;
    // let setAccordionAria;
    // let switchAccordion;
    const touchSupported = ('ontouchstart' in window);
    const pointerSupported = ('pointerdown' in window);

    const skipClickDelay = (e) => {
        e.preventDefault();
        e.target.click();
    };

    const setAriaAttr = (el, ariaType, newProperty) => {
        el.setAttribute(ariaType, newProperty);
    };

    const setAccordionAria = (el1, el2, expanded) => {
        switch (expanded) {
            case 'true':
                setAriaAttr(el1, 'aria-expanded', 'true');
                setAriaAttr(el2, 'aria-hidden', 'false');
                break;
            case 'false':
                setAriaAttr(el1, 'aria-expanded', 'false');
                setAriaAttr(el2, 'aria-hidden', 'true');
                break;
            default:
                break;
        }
    };

    const switchAccordion = (e) => {
        console.log('triggered');
        e.preventDefault();
        const thisAnswer = e.target.parentNode.nextElementSibling;
        const thisQuestion = e.target;
        if (thisAnswer.classList.contains('is-collapsed')) {
            setAccordionAria(thisQuestion, thisAnswer, 'true');
        } else {
            setAccordionAria(thisQuestion, thisAnswer, 'false');
        }
        thisQuestion.classList.toggle('is-collapsed');
        thisQuestion.classList.toggle('is-expanded');
        thisAnswer.classList.toggle('is-collapsed');
        thisAnswer.classList.toggle('is-expanded');

        thisAnswer.classList.toggle('animateIn');
    };
    for (let i = 0, len = accordionToggles.length; i < len; i++) {
        if (touchSupported) {
            accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
        }
        if (pointerSupported) {
            accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
        }
        accordionToggles[i].addEventListener('click', switchAccordion, false);
    }
}());
