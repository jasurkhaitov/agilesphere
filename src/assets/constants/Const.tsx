export const style = {
    buttonStyle: 'shadow-[1px_4px_10px_#000000] sm:flex items-center justify-center gap-1 bg-BbuttonColor px-[15px] md:px-[17px] py-[10px] md:py-[12px] border-none rounded-[10px] active:scale-95',

    input: 'border-none p-[15px] mt-1 rounded-[10px] shadow-[#000_0px_4px_1px,#000_0px_5px_10px] text-white bg-BbackgoundColor',

    buttonModal: 'flex items-center border-[0.15px] rounded-md border-Bgray p-2 w-full gap-2 justify-center',

    buttonActive: 'shadow-[1px_4px_10px_#000000] bg-BbuttonColor px-[17px] py-[12px] border-none rounded-[10px] hover:bg-BbuttonColorHover active:scale-95 mt-3 qsm:mt-6 w-full text-button text-white',

    buttonNoneActive: 'bg-BbuttonColorNone px-[17px] py-[12px] border-none rounded-[10px] cursor-not-allowed mt-3 qsm:mt-6 w-full text-button text-white',
}

export const boxElement = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 16 16"><path fill="green" fill-rule="evenodd" d="M3 13.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h9.25a.75.75 0 0 0 0-1.5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5zm12.78-8.82a.75.75 0 0 0-1.06-1.06L9.162 9.177L7.289 7.241a.75.75 0 1 0-1.078 1.043l2.403 2.484a.75.75 0 0 0 1.07.01z" clip-rule="evenodd"/></svg>
        ),
        name: 'Task',
        description: 'Plan, organize, and collaborate on any project with task management that can be customized for every need.'
    },

    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="blue" d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727zm-.545 10.455H7.09v-1.364h7.09v1.364zm2.727-3.273H7.091v-1.364h9.818zm0-3.273H7.091V9.273h9.818zM14.727 6h6l-6-6z"/></svg>
        ),
        name: 'Document',
        description: 'Create beautiful Docs, wikis, and more—then connect them to workflows to execute on ideas with your team.'
    },

    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="red" d="M12.787 5.807a.75.75 0 0 1 .463.693v4a.75.75 0 0 1-1.5 0V8.31l-.22.22a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 .817-.163"/><path fill="red" fill-rule="evenodd" d="M7.498 1.607A27.123 27.123 0 0 1 12 1.25c1.828 0 3.339.161 4.502.357l.135.023c1.01.169 1.85.31 2.506 1.118c.421.519.557 1.08.588 1.705l.492.164c.463.154.87.29 1.191.44c.348.162.667.37.911.709c.244.338.341.707.385 1.088c.04.353.04.78.04 1.27v.144c0 .402 0 .757-.03 1.054c-.032.321-.103.634-.28.936c-.179.303-.418.517-.683.701c-.245.17-.555.343-.907.538l-2.64 1.467c-.54 1.061-1.28 2.007-2.3 2.69c-.875.587-1.922.959-3.16 1.065v2.031h1.43a1.75 1.75 0 0 1 1.716 1.407l.219 1.093H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h1.885l.219-1.093A1.75 1.75 0 0 1 9.82 18.75h1.43v-2.031c-1.238-.106-2.285-.478-3.16-1.064c-1.019-.684-1.76-1.63-2.3-2.691l-2.64-1.467a11.148 11.148 0 0 1-.907-.538a2.217 2.217 0 0 1-.682-.7a2.212 2.212 0 0 1-.281-.937c-.03-.297-.03-.652-.03-1.054v-.145c0-.488 0-.916.04-1.269c.044-.381.14-.75.385-1.088c.244-.339.563-.547.91-.71c.323-.15.729-.285 1.192-.439l.492-.164c.031-.626.167-1.186.588-1.705c.657-.809 1.496-.95 2.507-1.118zM9.415 21.25h5.17l-.16-.799a.25.25 0 0 0-.245-.201H9.82a.25.25 0 0 0-.245.201zM4.302 6.023c.072 1.52.243 3.2.671 4.77l-1.066-.591c-.389-.217-.633-.353-.809-.475c-.162-.113-.215-.18-.244-.23c-.03-.05-.062-.128-.082-.324a10.58 10.58 0 0 1-.022-.938v-.073c0-.539.001-.88.03-1.138c.028-.238.072-.327.112-.381c.039-.055.109-.125.326-.226c.236-.11.56-.219 1.07-.39zm14.725 4.77l1.066-.591c.389-.217.633-.353.809-.475c.162-.113.215-.18.244-.23c.03-.05.062-.128.082-.324c.021-.214.022-.493.022-.938v-.073c0-.539-.001-.88-.03-1.138c-.028-.238-.072-.327-.112-.381c-.039-.055-.109-.125-.326-.226c-.236-.11-.56-.219-1.07-.39l-.014-.004c-.071 1.52-.243 3.2-.67 4.77M12 2.75c-1.74 0-3.167.153-4.252.336c-1.207.204-1.46.28-1.726.608c-.262.322-.287.628-.234 1.983c.09 2.258.388 4.696 1.31 6.55c.456.914 1.052 1.662 1.828 2.182c.77.517 1.765.841 3.074.841c1.31 0 2.304-.324 3.075-.841c.776-.52 1.371-1.268 1.826-2.183c.923-1.853 1.221-4.29 1.31-6.55c.055-1.354.03-1.66-.232-1.982c-.266-.328-.52-.404-1.727-.608A25.627 25.627 0 0 0 12 2.75" clip-rule="evenodd"/></svg>
        ),
        name: 'Goals',
        description: 'Achieve success even faster with AgileSphere Goals. Stay on track to hit your objectives with clear timelines, and automatic progress tracking.'
    },

    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="-2 -2 24 24"><path fill="blue" d="m5.72 14.456l1.761-.508l10.603-10.73a.456.456 0 0 0-.003-.64l-.635-.642a.443.443 0 0 0-.632-.003L6.239 12.635zM18.703.664l.635.643c.876.887.884 2.318.016 3.196L8.428 15.561l-3.764 1.084a.901.901 0 0 1-1.11-.623a.915.915 0 0 1-.002-.506l1.095-3.84L15.544.647a2.215 2.215 0 0 1 3.159.016zM7.184 1.817c.496 0 .898.407.898.909a.903.903 0 0 1-.898.909H3.592c-.992 0-1.796.814-1.796 1.817v10.906c0 1.004.804 1.818 1.796 1.818h10.776c.992 0 1.797-.814 1.797-1.818v-3.635c0-.502.402-.909.898-.909s.898.407.898.91v3.634c0 2.008-1.609 3.636-3.593 3.636H3.592C1.608 19.994 0 18.366 0 16.358V5.452c0-2.007 1.608-3.635 3.592-3.635z"/></svg>
        ),
        name: 'Whiteboards',
        description: "The world’s only virtual whiteboard that turns your team's ideas into coordinated actions—all in one place."
    },

    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="yellow" d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6zm2-10h4V5H5zm10 8h4v-6h-4zm0-12h4V5h-4zM5 19h4v-2H5zm4-2"/></svg>
        ),
        name: 'Dashboards',
        description: 'Surface deeper insights and gain high-level overviews of your work with fully customizable Dashboards in AgileSphere.'
    },

    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#1c98f7"/><path fill="#fff" d="M16.28 23.325a11.45 11.45 0 0 0 2.084-.34a5.696 5.696 0 0 0 2.602.17a.627.627 0 0 1 .104-.008c.31 0 .717.18 1.31.56v-.625a.61.61 0 0 1 .311-.531c.258-.146.498-.314.717-.499c.864-.732 1.352-1.708 1.352-2.742c0-.347-.055-.684-.159-1.006c.261-.487.472-.999.627-1.53A4.59 4.59 0 0 1 26 19.31c0 1.405-.654 2.715-1.785 3.673a5.843 5.843 0 0 1-.595.442v1.461c0 .503-.58.792-.989.493a15.032 15.032 0 0 0-1.2-.81a2.986 2.986 0 0 0-.368-.187c-.34.051-.688.077-1.039.077c-1.412 0-2.716-.423-3.743-1.134zm-7.466-2.922C7.03 18.89 6 16.829 6 14.62c0-4.513 4.258-8.12 9.457-8.12c5.2 0 9.458 3.607 9.458 8.12c0 4.514-4.259 8.121-9.458 8.121c-.584 0-1.162-.045-1.728-.135c-.245.058-1.224.64-2.635 1.67c-.511.374-1.236.013-1.236-.616v-2.492a9.27 9.27 0 0 1-1.044-.765m4.949.666c.043 0 .087.003.13.01c.51.086 1.034.13 1.564.13c4.392 0 7.907-2.978 7.907-6.589c0-3.61-3.515-6.588-7.907-6.588c-4.39 0-7.907 2.978-7.907 6.588c0 1.746.821 3.39 2.273 4.62c.365.308.766.588 1.196.832c.241.136.39.39.39.664v1.437c1.116-.749 1.85-1.104 2.354-1.104m-2.337-4.916c-.685 0-1.24-.55-1.24-1.226c0-.677.555-1.226 1.24-1.226c.685 0 1.24.549 1.24 1.226c0 .677-.555 1.226-1.24 1.226m4.031 0c-.685 0-1.24-.55-1.24-1.226c0-.677.555-1.226 1.24-1.226c.685 0 1.24.549 1.24 1.226c0 .677-.555 1.226-1.24 1.226m4.031 0c-.685 0-1.24-.55-1.24-1.226c0-.677.555-1.226 1.24-1.226c.685 0 1.24.549 1.24 1.226c0 .677-.555 1.226-1.24 1.226"/></g></svg>
        ),
        name: 'Chat',
        description: 'No more juggling multiple tools and scattered conversations. Bring team communication under one roof with AgileSphere Chat to share updates.'
    }
]