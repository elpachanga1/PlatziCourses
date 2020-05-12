const connectDB = require("./db");
const { ObjectID } = require("mongodb");
const errorHandler = require("./errorHandler");

module.exports = {
  Course: {
    students: async ({ students }) => {
      let db, studentData, IDs;

      try {
        db = await connectDB();
        IDs = students ? students.map((id) => ObjectID(id)) : [];
        studentData =
          IDs.length > 0
            ? await db
                .collection("students")
                .find({ _id: { $in: IDs } })
                .toArray()
            : [];
      } catch (error) {
        errorHandler(error);
      }
      return studentData;
    },
  },
};
