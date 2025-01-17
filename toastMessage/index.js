// toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // Remove toast when click x
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: "fa fa-check-circle",
      info: "fa fa-info-circle",
      warning: "fa fa-exclamation-triangle",
      error: "fa fa-circle-exclamation",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease 0.5s, fadeOut linear 1s ${delay}s forwards`;
    toast.innerHTML = `
    <div class="toast__icon">
    <i class="${icon}"></i>
  </div>
  <div class="toast__body">
    <h3 class="toast__title">${title}</h3>
    <p class="toast__msg">${message}</p>
  </div>
  <div class="toast__close">
    <i class="fa fa-times"></i>
  </div>
    `;
    main.appendChild(toast);
  }
}

function showSuccessToast() {
  toast({
    title: "Success!",
    message: "Bạn đã đăng ký thành công tài khoản tại F8.",
    type: "success",
    duration: 5000,
  });
}

function showInfoToast() {
  toast({
    title: "Notice!",
    message: "Ngày mai là sinh nhật bạn.",
    type: "info",
    duration: 5000,
  });
}

function showWarningToast() {
  toast({
    title: "Warning!",
    message: "Ai đó đang cố đăng nhập vào Gmail của bạn.",
    type: "warning",
    duration: 5000,
  });
}

function showErrorToast() {
  toast({
    title: "Error!",
    message: "Mật khẩu không hợp lệ.",
    type: "error",
    duration: 5000,
  });
}
