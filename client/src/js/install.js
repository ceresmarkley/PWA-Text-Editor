const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // remove hidden class from install button
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    // if no event return
    if (!promptEvent) {
        return;
    }
    // if prompt exist, show prompt
    promptEvent.prompt();
    // call deferredPrompt once
    window.deferredPrompt = null;
    // toggle hidden class
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => { window.deferredPrompt = null; });
