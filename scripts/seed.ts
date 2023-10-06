const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: 'Historical' },
        { name: 'Philosophy and Thought' },
        { name: 'Wellness and Spirituality' },
        { name: 'Business and Finance' },
        { name: 'Pop Culture' },
        { name: 'Social Media' },
        { name: 'Gaming' },
        { name: 'Literary' },
        { name: 'Mythical and Legendary' },
        { name: 'Animals and Creatures' },
        { name: 'AI and Robots' },
        { name: 'Humor and Entertainment' },
        { name: 'Adventure and Exploration' },
        { name: 'Education & Sciences' },
        { name: 'Specialty and Niche' },
        { name: 'Sports' },
      ],
    });
  } catch (error) {
    console.error('Error seeding default categories:', error);
  } finally {
    await db.$disconnect();
  }
}

main();