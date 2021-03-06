# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Category name.."
c1 = Category.create(name: "Education")
c2 = Category.create(name: "Arts & Crafts")
c3 = Category.create(name: "Movement")


puts "creating Activities..."

a1 = Activity.create( name: "Pipe Cleaner Constellation", image: "/PebblePeopleEducation.png", description: "constellation cards, pipe cleaners, star beads", category_id: c1.id )
a2 = Activity.create( name: "Backyard Treasure Hunt", image: "/PebblePeopleEducation.png" , description: "The coolest place to explore lies in your own backyard. Add this activity to your favorites to start today! ", category_id: c1.id )
a3 = Activity.create( name: "Fraction Flowers", image: "/PebblePeopleEducation.png", description: "It's a blooming time to pick off your petal by playing this game. Make sure to heart to add to your favorites.", category_id: c1.id )
a4 = Activity.create( name: "Binary Code Jewelry", image: "/PebblePeopleEducation.png", description: "Who says you can't look snazzy while learning how to code? Heart this activity to look fashionable", category_id: c1.id )

a5 = Activity.create( name: "Nature Trail Clay Sculptures", image: "/PebblePeopleArt.png", description: "Heart this activity now to capture and create your findings from outdoor!", category_id: c2.id )
a6 = Activity.create( name: "Toilet Roll Animals", image: "/PebblePeopleArt.png", description: "Create a zoo with your children today by making Toilet Roll Animals!", category_id: c2.id )
a7 = Activity.create( name: "Origami Frog", image: "/PebblePeopleArt.png", description: "Did you know most frogs can jump about 20 times their body length?! Here's an opportunity to see if this is true.", category_id: c2.id )

a8 = Activity.create( name: "Get Up and Move Dice Game", image: "/PebblePeopleMovement.png", description: "Shake it up and get moving with this dice game!", category_id: c3.id )
a9 = Activity.create( name: "Kid Yoga", image: "/PebblePeopleMovement.png", description: "Slow it down with some yoga movements today!  ", category_id: c3.id )
a10 = Activity.create( name: "Floor is Lava", image: "/PebblePeopleMovement.png", description: "It's hot! Do not touch the floor or else you'll burn! ", category_id: c3.id )

puts "done seeding"
