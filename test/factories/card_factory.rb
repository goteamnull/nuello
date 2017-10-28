FactoryGirl.define do
  factory :card do
    title { FFaker::Lorem.unique.words.join(" ") }
    sequence(:position)
    list
  end
end
