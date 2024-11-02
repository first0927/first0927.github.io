document.addEventListener("DOMContentLoaded", function () {
    const afterpayContainer = document.getElementById(
        "shopify-block-afterpay_on_site_messaging_payments_messaging_bALjzh"
    );

    if (afterpayContainer) {
        const targetElement = document.querySelector(
            ".hdt-product-info__item.hdt-product__price"
        );

        if (targetElement) {
            targetElement.insertAdjacentElement("afterend", afterpayContainer);

            const checkSquarePlacement = setInterval(() => {
                const squarePlacement =
                    afterpayContainer.querySelector("square-placement");
                if (squarePlacement) {
                    const shadowRoot = squarePlacement.shadowRoot;
                    if (shadowRoot) {
                        const observer = new MutationObserver((mutationsList) => {
                            mutationsList.forEach((mutation) => {
                                if (mutation.type === "childList") {
                                    const amountElement = shadowRoot.querySelector('.afterpay-text2 strong')|| shadowRoot.querySelector('.afterpay-main-text strong');
                                    console.log(amountElement)
                                    if (amountElement) {
                                        amountElement.style.color = 'pink';
                                        observer.disconnect();
                                    } else {
                                        console.error('未找到amountElement元素');
                                    }
                                }
                            });
                        });
                        observer.observe(shadowRoot, { childList: true, subtree: true });
                        clearInterval(checkSquarePlacement);
                    } else {
                        console.error('未找到shadowRoot');
                    }
                } else {
                    console.error('未找到squarePlacement');
                }
            }, 500);
        } else {
            console.error('未找到目标元素');
        }
    } else {
        console.error('未找到Afterpay容器');
    }
});
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
