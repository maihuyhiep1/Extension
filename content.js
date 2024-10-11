// Wait for the page to load fully
window.addEventListener('load', function () {
    // Retrieve the stored data parsed by the AI
    chrome.storage.local.get(['bookingInfo'], function (result) {
        if (result.bookingInfo) {
            // Filling the form fields with parsed data
            document.querySelector("input[name='Số điện thoại']").value = result.bookingInfo.phoneNumber;
            document.querySelector("input[name='Họ và tên']").value = result.bookingInfo.customerName;
            document.querySelector("input[name='Tổng số khách']").value = result.bookingInfo.guestCount;
            document.querySelector("input[name='Ngày đặt lịch']").value = result.bookingInfo.date;
            document.querySelector("select[name='Dịch vụ']").value = result.bookingInfo.service;
            document.querySelector("select[name='Kỹ thuật viên']").value = result.bookingInfo.stylist;
        }
    });
});
