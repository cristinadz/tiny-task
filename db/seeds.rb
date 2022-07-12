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

a1 = Activity.create( name: "Pipe Cleaner Constellation", image: "https://imgur.com/NZWXXWX", description: "constellation cards, pipe cleaners, star beads", category_id: c1.id )
a2 = Activity.create( name: "Backyard Treasure Hunt", image: "https://imgur.com/4pZeMcg", description: "", category_id: c1.id )
a3 = Activity.create( name: "Fraction Flowers", image: "https://imgur.com/gJXMSCH", description: "", category_id: c1.id )
a4 = Activity.create( name: "Binary Code Jewelry", image: "https://imgur.com/YnIh3nJ", description: "", category_id: c1.id )

a5 = Activity.create( name: "Nature Trail Clay Sculptures", image: "https://imgur.com/KIWfyFl", description: "", category_id: c2.id )
a6 = Activity.create( name: "Toilet Roll Animals", image: "https://imgur.com/XJMcubo", description: "", category_id: c2.id )
a7 = Activity.create( name: "Origami Frog", image: "https://imgur.com/6ub54qP", description: "", category_id: c2.id )

a8 = Activity.create( name: "Get Up and Move Dice Game", image: "https://imgur.com/NfEoetg", description: "", category_id: c3.id )
a9 = Activity.create( name: "Kid Yoga", image: "https://imgur.com/spItOtF", description: "", category_id: c3.id )
a10 = Activity.create( name: "Floor is Lava", image: "https://imgur.com/7WEk8Ib", description: "", category_id: c3.id )

puts "done seeding"
