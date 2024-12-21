const {PrismaClient} = require("@prisma/client");

// // const database = new PrismaClient();

// // async function main() {
// //   try {
// //     await database.category.deleteMany();
// //     await database.category.createMany({
// //       data: [
// //         { "name": "Programming" },
// //         { "name": "Web Development" },
// //         { "name": "Electronics" },
// //         { "name": "Mobile App Development" },
// //         { "name": "Design" }
// //       ]
// //     })

// //     console.log("success");
// //   }
// //   catch (error) {
// //     console.log("Error seeding the database categories", error);
// //   } finally {
// //     await database.$disconnect();
// //   }
// // }

// // main()


// const { PrismaClient } = require("@prisma/client");

// const database = new PrismaClient();

// async function main() {
//   try {
//     // Delete existing categories (if you want to reset the categories)
//     await database.category.deleteMany();

//     // Create new categories related to Business and Finance
//     await database.category.createMany({
//       data: [
//         { "name": "Business Management" },
//         { "name": "Finance" },
//         { "name": "Economics" },
//         { "name": "Investments" },
//         { "name": "Accounting" },
//         { "name": "Entrepreneurship" },
//         { "name": "Corporate Strategy" },
//         { "name": "Marketing" }
//       ]
//     });

//     console.log("Business and Finance categories seeded successfully!");
//   } catch (error) {
//     console.log("Error seeding the database categories:", error);
//   } finally {
//     await database.$disconnect();
//   }
// }

// main();


// import { PrismaClient } from "@prisma/client";

const database = new PrismaClient();

async function main() {
  try {
    // Delete existing categories (optional, if you want to reset categories)
    await database.category.deleteMany();

    // Create new categories related to Business and Finance
    await database.category.createMany({
      data: [
        { name: "Business Management" },
        { name: "Finance" },
        { name: "Economics" },
        { name: "Investments" },
        { name: "Accounting" },
        { name: "Entrepreneurship" },
        { name: "Corporate Strategy" },
        { name: "Marketing" }
      ]
    });

    console.log("Business and Finance categories seeded successfully!");
  } catch (error) {
    console.log("Error seeding the database categories:", error);
  } finally {
    await database.$disconnect();
  }
}

main();
