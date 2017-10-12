FactoryGirl.define do
  factory :board do
    title { FFaker::Lorem.unique.words.join(" ") }
  end
end
