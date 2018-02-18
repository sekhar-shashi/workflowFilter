/* istanbul ignore next */
const filterHandler = function(request, reply) {
  if (Array.isArray(request.payload.payload)) {
    return reply({'response': handleJson(request.payload.payload)});
  } else reply(null);
};
function handleJson(items) {
  let res = [];
  items.forEach(function(element) {
    let tempArr = [];
    if (element.address.buildingNumber) tempArr.push(element.address.buildingNumber);
    tempArr.push(element.address.street); tempArr.push(element.address.suburb); tempArr.push(element.address.state);
    tempArr.push(element.address.postcode);
    if (element.type && element.type === 'htv' && element.workflow && element.workflow === 'completed') {
      res.push({'concataddress': tempArr.join(','), 'type': element.type, 'workflow': element.workflow});
    }
  }, this);
  return res;
}
module.exports = {filterHandler, handleJson};
