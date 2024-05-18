let id = 1;

function createUserProfiles(names, modifiedNames) {
  return names.map((name, index) => {
    return {
      id: id++,
      originalName: name,
      modifiedName: modifiedNames[index],
    };
  });
}