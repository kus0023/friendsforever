document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.scrollspy');
    const options = {}
    const instances = M.ScrollSpy.init(elems, options);
  });