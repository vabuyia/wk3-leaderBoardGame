const refreshBtn = document.querySelector('.refreshBtn');

const refresh = () => {
  window.location.reload();
  return true;
};

export { refresh, refreshBtn };
