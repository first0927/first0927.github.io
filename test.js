document.addEventListener("DOMContentLoaded", function() {
    var _0x12a4d0 = new Date(),
        _0x3d5a6d = new Date('2024-11-11T23:59:59');
    if (_0x12a4d0 > _0x3d5a6d) return;
    
    var _0x2b6b5a = document.getElementById("shopify-block-afterpay_on_site_messaging_payments_messaging_bALjzh");
    if (_0x2b6b5a) {
        var _0x21a8fc = document.querySelector(".hdt-product-info__item.hdt-product__price");
        if (_0x21a8fc) {
            _0x21a8fc.insertAdjacentElement("afterend", _0x2b6b5a);
            var _0x4935de = setInterval(function() {
                var _0x1584a4 = _0x2b6b5a.querySelector("square-placement");
                if (_0x1584a4 && _0x1584a4.shadowRoot) {
                    new MutationObserver(function(_0x45e8cf) {
                        _0x45e8cf.forEach(function(_0x280d3b) {
                            if (_0x280d3b.type === "childList") {
                                var _0x5a31e8 = _0x1584a4.shadowRoot.querySelector(".afterpay-text2 strong") ||
                                                _0x1584a4.shadowRoot.querySelector(".afterpay-main-text strong");
                                if (_0x5a31e8) {
                                    _0x5a31e8.style.color = "pink";
                                    _0x2de9c9.disconnect();
                                }
                            }
                        });
                    }).observe(_0x1584a4.shadowRoot, { childList: true, subtree: true });
                    clearInterval(_0x4935de);
                }
            }, 500);
        }
    }
});




function initializeAfterpay(container) {
  document
    .querySelectorAll(".hdt-product-form_value.is-type-block")
    .forEach((variant) => {
      variant.addEventListener("click", function () {
        const priceElements = document.getElementsByClassName("hdt-money");
        const newPrice =
          priceElements.length > 0 ? priceElements[1].textContent : null;
        if (newPrice) {
          updateAfterpayDisplay(newPrice, container);
        }
      });
    });
}

function updateAfterpayDisplay(price, container) {
  if (typeof AfterPay !== "undefined" && AfterPay.clearElements) {
    AfterPay.clearElements();
  }

  setTimeout(() => {
    if (typeof AfterPay !== "undefined" && AfterPay.initialize) {
      const countryCode = "US";
      AfterPay.initialize({
        countryCode: countryCode,
        price: price,
      });
    }
  }, 500);
}
