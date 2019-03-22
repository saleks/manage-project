const reloadBeforeEach = (to, from, next) => {
    // If we are going to a page that requires a refresh
    // null is used to avoid an infinite refresh loop
    if (to.meta.refresh && from.name !== null) {
        window.location.href = to.path;
        return;
    }
    // If we are leaving a page that required a refresh
    if (from.meta.refresh) {
        window.location.href = to.path;
        return;
    }
    next();
};

export default reloadBeforeEach;