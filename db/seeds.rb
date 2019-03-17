20.times do
  Item.create({
    name: Faker::Hacker.say_something_smart
  })
end

puts 'seeded'