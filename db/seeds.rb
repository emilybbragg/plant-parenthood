# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: 'emilyb', password: 'plantlover', name: 'Emily Bragg')
user2 = User.create(username: 'emilyc', password: 'plantlovr')


category1 = Category.create(name: 'Houseplant')
category2 = Category.create(name: 'Succulent')
category3 = Category.create(name: 'Herb')
category4 = Category.create(name: 'Flower')
category5 = Category.create(name: 'Tropical')


# comment1 = Comment.create(user_id: user_id, description: "working comment", post_id: 3)


puts "✍🏻🗒️ DB seeded!"