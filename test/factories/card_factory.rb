FactoryGirl.define do
  factory :card do
    title { FFaker::Lorem.unique.words.join(" ") }
    list
  end
end
