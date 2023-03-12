<?php

namespace App\Trait;

trait Search
{
    private function buildWildCards($term): string
    {
        $reservedSymbols = ['-', '+', '<', '>', '@', '(', ')', '~'];
        $term = str_replace($reservedSymbols, '', $term);
        $words = explode(' ', $term);
        foreach($words as $idx => $word) {
            $words[$idx] = "+" . $word . "*";
        }
        return implode(' ', $words);
    }

    protected function scopeSearch($query, $term) {
        $columns = implode(',', $this->searchable);
        $query->whereRaw(
            "MATCH ({$columns}) AGAINST (? IN BOOLEAN MODE)",
            $this->buildWildCards($term)
        );
        return $query;
    }
}
