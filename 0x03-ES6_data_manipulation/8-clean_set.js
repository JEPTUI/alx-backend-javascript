function cleanSet(set, startString) {
  const filtvalues = Array.from(set).filter((value) => value.startsWith(startString));
  return filtvalues.join('-').replace(new RegExp(`^${startString}`), '');
}

export default cleanSet;
