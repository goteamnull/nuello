FactoryGirl.define do
  factory :list do
    title { FFaker::Lorem.unique.words.join(" ") }
    sequence(:position)
    board
  end
end
