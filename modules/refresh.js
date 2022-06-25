const refreshBtn = document.querySelector('.refreshBtn');

const refresh = () => {
  window.location.reload();
  return false;
};

export { refresh, refreshBtn };
