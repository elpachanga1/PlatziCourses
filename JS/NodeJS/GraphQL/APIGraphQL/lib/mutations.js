const connectDB = require("./db");
const { ObjectID } = require("mongodb");
const errorHandler = require("./errorHandler");

module.exports = {
  createCourse: async (root, { input }) => {
    let db, course;

    const defaults = {
      teacher: "",
      topic: "",
    };

    const newCourse = Object.assign(defaults, input);

    try {
      db = await connectDB();
      course = await db.collection("courses").insertOne(newCourse);
      newCourse._id = course.insertedId;
    } catch (error) {
      errorHandler(error);
    }

    return newCourse;
  },

  editCourse: async (root, { _id, input }) => {
    let db, course;

    try {
      db = await connectDB();
      await db
        .collection("courses")
        .updateOne({ _id: ObjectID(_id) }, { $set: input });

      course = await db.collection("courses").findOne({
        _id: ObjectID(_id),
      });
    } catch (error) {
      errorHandler(error);
    }

    return course;
  },

  createStudent: async (root, { input }) => {
    let db, student;

    try {
      db = await connectDB();
      student = await db.collection("students").insertOne(input);
      input._id = student.insertedId;
    } catch (error) {
      errorHandler(error);
    }

    return input;
  },

  editStudent: async (root, { _id, input }) => {
    let db, student;

    try {
      db = await connectDB();
      await db
        .collection("students")
        .updateOne({ _id: ObjectID(_id) }, { $set: input });

      student = await db.collection("students").findOne({
        _id: ObjectID(_id),
      });
    } catch (error) {
      errorHandler(error);
    }

    return student;
  },

  deleteCourse: async (root, { _id }) => {
    let db, course;
    try {
      db = await connectDB();
      course = await db.collection("courses").findOne({ _id: ObjectID(_id) });
      if (!course) throw new Error("Curso no Existe");
      await db.collection("courses").deleteOne({ _id: ObjectID(_id) });
    } catch (error) {
      errorHandler(error);
    }
    return course;
  },

  deleteStudent: async (root, { _id }) => {
    let db, student;
    try {
      db = await connectDB();
      student = await db.collection("students").findOne({ _id: ObjectID(_id) });
      if (!student) throw new Error("Estudiante no Existe");
      await db.collection("students").deleteOne({ _id: ObjectID(_id) });
    } catch (error) {
      errorHandler(error);
    }
    return student;
  },

  addStudentToCourse: async (root, { CourseID, StudentID }) => {
    let db, student, course;
    try {
      db = await connectDB();

      course = await db
        .collection("courses")
        .findOne({ _id: ObjectID(CourseID) });
      student = await db
        .collection("students")
        .findOne({ _id: ObjectID(StudentID) });

      if (!course || !student) throw new Error("Estudiante o Curso no Existe");

      await db
        .collection("courses")
        .updateOne(
          { _id: ObjectID(CourseID) },
          { $addToSet: { students: ObjectID(StudentID) } }
        );
    } catch (error) {
      errorHandler(error);
    }

    return course;
  },
};
