function getListStudentIds(studArray) {
  if (!Array.isArray(studArray)) {
    return [];
  }

  return studArray.map((student) => student.id);
}

export default getListStudentIds;
