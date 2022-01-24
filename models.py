from django.db import models

from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE


SEASON_CHOICES =(
   ('Spring Clothing','Spring Clothing'),
   ('Summer Clothing','Summer Clothing'),
   ('Autumn Clothing','Autumn Clothing'),
   ('Winter Clothing','Winter Clothing'),
   
)


CLOTHING_TYPE_CHOICES =(
   ('Dresses','Dresses'),
   ('Tops&Blouses','Tops&Blouses'),
   ('Hats','Hats'),
   ('Jeans','Jeans'),
   ('Sweater','Sweater'),
   ('Jacket&Coats','Jacket&Coats'),
)

CATEGORY_CHOICES =(
    ('Ladies_Dresses', (
            ('Day_Dresses', 'Day_Dresses'),
            ('Event_Dresses', 'Event_Dresses'),
            ('Fitted_Dresses', 'Fitted_Dresses'),
            ('Loose_Dresses', 'Loose_Dresses'),
        )
    ),
('Ladies_Tops&Blouses', (
            ('Knit_Tops_and_Tees', 'Knit_Tops_and_Tees'),
            ('Blouses_and_Shirts', 'Blouses_and_Shirts'),
            ('Sweaters_and_Cardigans', 'Sweaters_and_Cardigans'),
            ('Floral_Tops_and_Blouses', 'Floral_Tops_and_Blouses'),
        )
    ),

    ('Ladies_Hats', (
            ('Event_Hats', 'Event_Hats'),
            ('Wedding_Hats', 'Wedding_Hats'),
            ('Summer_Hats', 'Summer_Hats'),
            ('Floral_Hats', 'Floral_Hats'),
        )
    ),

    ('Ladies_Jeans', (
            ('Skinny_Jeans', 'Skinny_Jeans'),
            ('Loose_Jeans', 'Loose_Jeans'),
            ('High_Rise_Jeans', 'High_Rise_Jeans'),
            ('Straight_Mid-Rise_Jean', 'Straight_Mid-Rise_Jean'),
        )
    ),
    ('Ladies_Sweater', (
            ('Cable_Knit_Sweater', 'Cable_Knit_Sweater'),
            ('Woolen_Sweater', 'Woolen_Sweater'),
            ('Full_Zip_Sweater', 'Full_Zip_Sweater'),
            ('Patterned_Sweater', 'Patterned_Sweater'),
        )
    ),
    
    
    
    
    ('Ladies_Jacket&Coats', (
            ('Leather_Jackets', 'Leather_Jackets'),
            ('Draped_Collar_Trench_Coat', 'Draped_Collar_Trench_Coat'),
            ('Denim_Jacket', 'Denim_Jacket'),
            ('Tweed_Jacket', 'Tweed_Jacket'),
        )
    ),




    ('Mens_Popular', (
            ('Mens_Jumpers', 'Mens_Jumpers'),
            ('Mens_Cardigans', 'Mens_Cardigans'),
            ('Mens_Hoodies', 'Mens_Hoodies'),
            ('Mens_T-Shirts', 'Mens_T-Shirts'),
        )
    ),
('Mens_Suits_Shirts_&_Pants', (
            ('Mens_Blazers', 'Mens_Blazers'),
            ('Mens_Three_piece_suit', 'Mens_Three_piece_suit'),
            ('Mens_Formal_Shirts', 'Mens_Formal_Shirts'),
            ('Mens_Pants', 'Mens_Pants'),
        )
    ),

    ('Mens_Hats', (
            ('Mens_Hats', 'Mens_Hats'),
            ('Mens_Summer_Caps', 'Mens_Summer_Caps'),
            ('Mens_Golf_Caps', 'Mens_Golf_Caps'),
            ('Winter_Caps', 'Winter_Caps'),
        )
    ),

    ('Mens_Jeans', (
            ('Mens_Skinny_Jeans', 'Mens_Skinny Jeans'),
            ('Mens_Loose_Jeans', 'Mens_Loose_Jeans'),
            ('Mens_Slim_Fit_Jeans', 'Mens_Slim_Fit_Jeans'),
            ('Mens_Straight_Fit_Jeans', 'Mens_Straight_Fit_Jeans'),
        )
    ),
    ('Mens_Sweater', (
            ('Mens_Cable_Knit_Sweater', 'Mens_Cable_Knit_Sweater'),
            ('Mens_Woolen_Sweater', 'Mens_Woolen_Sweater'),
            ('Mens_Full_Zip_Sweater', 'Mens_Full_Zip_Sweater'),
            ('Mens_Patterned_Sweater', 'Mens_Patterned_Sweater'),
        )
    ),
    
    
    
    
    ('Mens_Jacket&Coats', (
            ('Mens_Leather_Jackets', 'Mens_Leather_Jackets'),
            ('Mens_Draped_Collar_Trench_Coat', 'Mens_Draped_Collar_Trench_Coat'),
            ('Mens_Denim_Jacket', 'Mens_Denim_Jacket'),
            ('Mens_Tweed_Jacket', 'Mens_Tweed_Jacket'),
        )
    ),

    ('Womens_Fragrance', (
            ('Rose_Lavender', 'Rose_Lavender'),
            ('Summer_Flowers', 'Summer_Flowers'),
            ('Wild', 'Wild'),
            ('Classic', 'Classic'),
        )
    ),

    ('Mens_Fragrance', (
            ('Mens_Intense', 'Mens_Intense'),
            ('Mens_Summer_Madness', 'Mens_Summer_Madness'),
            ('Mens_Wild', 'Mens_Wild'),
            ('Mens_Classic', 'Mens_Classic'),
        )
    ),
    
)  
	



class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    image2 = models.ImageField(null=True, blank=True)
    image3 = models.ImageField(null=True, blank=True)
    image4 = models.ImageField(null=True, blank=True)
    image5 = models.ImageField(null=True, blank=True)
    mens_womens_coat_size_xxs = models.IntegerField(null=True, blank=True, default=0)
    mens_womens_coat_size_xs = models.IntegerField(null=True, blank=True, default=0)
    mens_womens_coat_size_s = models.IntegerField(null=True, blank=True, default=0)
    mens_womens_coat_size_m = models.IntegerField(null=True, blank=True, default=0)
    mens_womens_coat_size_l = models.IntegerField(null=True, blank=True, default=0)
    mens_womens_coat_size_xl = models.IntegerField(null=True, blank=True, default=0)
    mens_womens_coat_size_xxl = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU28_30L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU30_30L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU32_30L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU34_30L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU36_30L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU38_30L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU40_30L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU42_30L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU28_32L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU30_32L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU32_32L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU34_32L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU36_32L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU38_32L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU40_32L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU42_32L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU28_34L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU30_34L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU32_34L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU34_34L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU36_34L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU38_34L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU40_34L = models.IntegerField(null=True, blank=True, default=0)
    mens_jeans_EU42_34L = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU44_short = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU46_short = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU48_short = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU50_short = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU52_short = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU54_short = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU56_short = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU58_short = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU60_short = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU62_short = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU64_short = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU44_regular = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU46_regular = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU48_regular = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU50_regular = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU52_regular = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU54_regular = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU56_regular = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU58_regular = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU60_regular = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU62_regular = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU64_regular = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU44_long = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU46_long = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU48_long = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU50_long = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU52_long = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU54_long = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU56_long = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU58_long = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU60_long = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU62_long = models.IntegerField(null=True, blank=True, default=0)
    mens_blazers_EU64_long = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU24_short = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU25_short = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU26_short = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU27_short = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU28_short = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU29_short = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU30_short = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU31_short = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU32_short = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU33_short = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU34_short = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU24_regular = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU25_regular = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU26_regular = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU27_regular = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU28_regular = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU29_regular = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU30_regular = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU31_regular = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU32_regular = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU33_regular = models.IntegerField(null=True, blank=True, default=0)
    womans_jeans_EU34_regular = models.IntegerField(null=True, blank=True, default=0)
    womans_blazers_UK2 = models.IntegerField(null=True, blank=True, default=0)
    womans_blazers_UK4  = models.IntegerField(null=True, blank=True, default=0)
    womans_blazers_UK6  = models.IntegerField(null=True, blank=True, default=0)
    womans_blazers_UK8  = models.IntegerField(null=True, blank=True, default=0)
    womans_blazers_UK10  = models.IntegerField(null=True, blank=True, default=0)
    womans_blazers_UK12  = models.IntegerField(null=True, blank=True, default=0)
    womans_blazers_UK14  = models.IntegerField(null=True, blank=True, default=0)
    womans_blazers_UK16  = models.IntegerField(null=True, blank=True, default=0)
    womans_blazers_UK18  = models.IntegerField(null=True, blank=True, default=0)
    womens_mens_fragrance_50ml = models.IntegerField(null=True, blank=True, default=0)
    womens_mens_fragrance_100ml = models.IntegerField(null=True, blank=True, default=0)
    HAT_ONE_SIZE = models.IntegerField(null=True, blank=True, default=0)
    slug = models.SlugField(choices=CATEGORY_CHOICES,max_length=200, null=True, blank=True)
    color = models.CharField(max_length=200, null=True, blank=True)
    brand = models.CharField(max_length=200, null=True, blank=True)
    season = models.CharField(choices=SEASON_CHOICES,max_length=200, null=True, blank=True)
    category = models.CharField(choices=CATEGORY_CHOICES,max_length=200, null=True, blank=True)
    type_of_Clothing = models.CharField(choices=CLOTHING_TYPE_CHOICES,max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    description_care = models.TextField(null=True, blank=True)
    rating = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    oldPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)

    
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name

class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)
    
    taxPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    shippingPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    totalPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    isDelivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    coupon = models.ForeignKey(
        'Coupon', on_delete=models.SET_NULL, blank=True, null=True)
    #refund_requested = models.BooleanField(default=False)
    #refund_granted = models.BooleanField(default=False)

    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.createdAt)

class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)
    price =  models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)

class ShippingAddress(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    postalCode = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    shippingPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.address)




class Coupon(models.Model):
    code = models.CharField(max_length=15)
    amount = models.FloatField()

    def __str__(self):
        return self.code

class Refund(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    reason = models.TextField(null=True, blank=True)
    accepted = models.BooleanField(default=False)
    email = models.EmailField(max_length = 254)

    def __str__(self):
        return self.order   

class Podcast(models.Model):
    file = models.FileField(upload_to='musics/', null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name