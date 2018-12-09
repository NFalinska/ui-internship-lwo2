export const Person = function(firstAndLastName) {
  let names = firstAndLastName.split(' ');
  this.setFullName = (newName) => {
    names = newName.split(' ');
  };
  this.setFirstName = (first) => {
    names[0] = first;
  };
  this.setLastName = (last) => {
    names[1] = last;
  };
  this.getFullName = () => names.join(' ');
  this.getFirstName = () => names[0];
  this.getLastName = () => names[1];
};
