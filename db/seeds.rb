# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Category name.."
c1 = Category.create(name: "Education")
c2 = Category.create(name: "Arts & Craft")
c3 = Category.create(name: "Movement")


puts "creating Activities..."

a1 = Activity.create( name: "Pipe Cleaner Constellation", image: "https://www.123homeschool4me.com/wp-content/uploads/2017/08/Stars-Activity-1-800x533.jpg", description: "constellation cards, pipe cleaners, star beads", category_id: 1 a2 )
a2 = Activity.create( name: "Backyard Treasure Hunt", image: "", description: "", category_id: c1.id )
a3 = Activity.create( name: "Fraction Flowers", image: "", description: "", category_id: c1.id )
a4 = Activity.create( name: "Binary Code Jewelry", image: "", description: "", category_id: c1.id )

a5 = Activity.create( name: "Nature Trail Clay Sculptures", image: "", description: "", category_id: c2.id )
a6 = Activity.create( name: "Toilet Roll Animals", image: "", description: "", category_id: c2.id )
a7 = Activity.create( name: "Origami Frog", image: "", description: "", category_id: c2.id )

a8 = Activity.create( name: "Get Up and Move Dice Game", image: "", description: "", category_id: c3.id )
a9 = Activity.create( name: "Kid Yoga", image: "", description: "", category_id: c3.id )
a10 = Activity.create( name: "Floor is Lava", image: "", description: "", category_id: c3.id )

puts "done seeding"