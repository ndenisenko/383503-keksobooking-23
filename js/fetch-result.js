const fetchResult = (name) => {
  const template = document.querySelector(`#${name}`).content;
  const messageForUser = template.querySelector(`.${name}`).cloneNode(true);

  const onNotificationKeyup = (event) => {
    const isEscKeyup = event.key === 'Escape';

    if (isEscKeyup) {
      messageForUser.remove();
    }

    document.body.removeEventListener('keyup', onNotificationKeyup);
  };

  const clickHandler = () => {
    messageForUser.remove();
  };

  messageForUser.addEventListener('click', clickHandler);
  document.addEventListener('keydown', onNotificationKeyup);
  document.body.appendChild(messageForUser);
};

export {fetchResult};
