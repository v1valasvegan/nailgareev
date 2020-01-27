const app = () => {
    const state = { active: 'about-me' };
    const links = document.querySelectorAll('.nav__link');

    const getLinkContentId = (linkId) => `${linkId}-content`

    
    const render = ({ active }) => {
        document.querySelector('.active-link').classList.remove('active-link');
        document.querySelector('.active').classList.remove('active');
        const activeLink = document.getElementById(active);
        const activeContent = document.getElementById(getLinkContentId(active))
        activeLink.classList.add('active-link');
        activeContent.classList.add('active');
        
    }
    
    for(let link of links) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const { target: { id} } = e;
            if (id === state.active) {
                return;
            }
            state.active = id;
            render(state);
        })
    }
};

app();