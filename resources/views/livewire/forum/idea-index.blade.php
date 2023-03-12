<div>
    <div class="category-group-name">{{ $cat->name }}</div>
    <div class="b-category-container">
        @foreach($cat->forums as $parent)
            <a href="{{ route('forums.categories', $parent) }}" id="ember65" class="d-link
    b-category
    has-description
    ember-view"><div
                    class="category-icon">
                    <img alt="" src="https://d2723j7i5e2etm.cloudfront.net/ru/overwatch/plugins/discourse-blizzard-plugin/images/icons/bolt.png?1530125097">
                </div>

                <div class="category-information">
                    <h4 class="heading">{{ $parent->name }}</h4>
                    <h5 class="category-description">{{ $parent->description }}</h5>
                </div>
            </a>
        @endforeach
    </div>

</div>
