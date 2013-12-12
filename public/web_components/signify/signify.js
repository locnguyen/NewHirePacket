var SignifyProto = Object.create(HTMLElement.prototype);

SignifyProto.createdCallback = function () {
    var template = document.querySelector('template');
    var shadowRoot = this.webkitCreateShadowRoot();
    var content = template.content.cloneNode(true);
    shadowRoot.appendChild(content);
};

document.register('x-signify', {
    prototype: SignifyProto
});