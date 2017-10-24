FactoryGirl.define do
  factory :list do
    title { FFaker::Lorem.unique.words.join(" ") }
    board
  end
end
