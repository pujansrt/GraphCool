import {Student} from "../../models/Student";

const studentResolvers = {
    Query: {
        students: async (root: any, args: any, ctx: any) => {
            const students = await Student
                .find()
                .skip((args.pageNumber - 1) * args.pageSize)
                .limit(args.pageSize);

            return students
        }
    }
};

module.exports = studentResolvers;
