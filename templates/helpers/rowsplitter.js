// Export helpers
module.exports.register = function (Handlebars, options, params) {
  Handlebars.registerHelper('rowsplitter', function (attr, count, opts) {
    var result, i, zones, inject;

    zones = Math.ceil(attr.length / count);

    result = "";
    for (i = 0; i < zones; i++) {
      inject = {};
      inject['rowdata'] = attr.slice(i * count, (i + 1) * count);

      result += opts.fn(inject);
    }

    return result;
  });
};