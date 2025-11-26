import React from 'react';
import {
  Layers, Palette, User, Shirt,
  Dog, Apple, Coffee, Activity, Briefcase, Globe, Calendar,
  Hash, ListOrdered, Type, MapPin, Link2, HelpCircle,
  Monitor, Utensils, Heart, MessageCircle, AlertTriangle,
  Smile, Clock, Zap, MessageSquare, Users, Home, Car,
  ShoppingBag, Frown, HelpCircle as QuestionMark
} from 'lucide-react';

export const getCategoryIcon = (category: string) => {
  const props = { className: "w-5 h-5" };
  
  switch (category) {
    case 'All': return <Layers {...props} />;
    case 'Basics': return <Zap {...props} />;
    case 'Introductions': return <MessageSquare {...props} />;
    case 'Communication': return <MessageCircle {...props} />;
    case 'Travel': return <MapPin {...props} />;
    case 'Food': return <Utensils {...props} />;
    case 'Shopping': return <ShoppingBag {...props} />;
    case 'Emergencies': return <AlertTriangle {...props} />;
    case 'Feelings': return <Smile {...props} />;
    case 'Time & Weather': return <Clock {...props} />;
    case 'Verbs & Nouns': return <Type {...props} />;
    case 'Expressions': return <MessageCircle {...props} />;
    case 'Social': return <Users {...props} />;
    case 'Health': return <Heart {...props} />;
    case 'Work': return <Briefcase {...props} />;
    case 'Family': return <Home {...props} />;
    case 'Hobbies': return <Activity {...props} />;
    case 'Nature': return <Globe {...props} />;
    case 'Education': return <Briefcase {...props} />; // Reusing Briefcase or find better
    case 'Routine': return <Clock {...props} />;
    case 'House': return <Home {...props} />;
    case 'Transport': return <Car {...props} />;
    case 'Emotions': return <Frown {...props} />;
    case 'Misc': return <QuestionMark {...props} />;
    case 'Colors & Shapes': return <Palette {...props} />;
    case 'Body Parts': return <User {...props} />;
    case 'Clothing & Accessories': return <Shirt {...props} />;
    case 'Animals': return <Dog {...props} />;
    case 'Fruits & Vegetables': return <Apple {...props} />;
    case 'Drinks & Beverages': return <Coffee {...props} />;
    case 'Sports & Activities': return <Activity {...props} />;
    case 'Professions & Jobs': return <Briefcase {...props} />;
    case 'Countries & Nationalities': return <Globe {...props} />;
    case 'Months, Days & Seasons': return <Calendar {...props} />;
    case 'Numbers & Math': return <Hash {...props} />;
    case 'Ordinal Numbers': return <ListOrdered {...props} />;
    case 'Adjectives': return <Type {...props} />;
    case 'Prepositions': return <MapPin {...props} />;
    case 'Conjunctions': return <Link2 {...props} />;
    case 'Questions': return <HelpCircle {...props} />;
    case 'Technology': return <Monitor {...props} />;
    case 'Kitchen': return <Utensils {...props} />;
    default: return <Layers {...props} />;
  }
};
