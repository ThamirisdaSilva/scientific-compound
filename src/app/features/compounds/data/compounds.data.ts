export interface Compound {
  slug: string;
  name: string;
  formula: string;
  application: string;
}

export const COMPOUNDS: Compound[] = [
 {
    slug: 'polilaminina',
    name: 'Polilaminina',
    formula: 'Peptídeo sintético',
    application: 'Estudos sobre regeneração celular'
  },
  {
    slug: 'acido-acetilsalicilico',
    name: 'Ácido Acetilsalicílico',
    formula: 'C9H8O4',
    application: 'Analgésico e anti-inflamatório'
  },
  {
    slug: 'glicose',
    name: 'Glicose',
    formula: 'C6H12O6',
    application: 'Fonte de energia metabólica'
  },
  {
    slug: 'dopamina',
    name: 'Dopamina',
    formula: 'C8H11NO2',
    application: 'Neurotransmissor associado a motivação e recompensa'
  },
  {
    slug: 'serotonina',
    name: 'Serotonina',
    formula: 'C10H12N2O',
    application: 'Regulação de humor e comportamento'
  },
  {
    slug: 'colageno',
    name: 'Colágeno',
    formula: 'Proteína estrutural',
    application: 'Estrutura de tecidos conjuntivos'
  },
  {
    slug: 'insulina',
    name: 'Insulina',
    formula: 'Hormônio peptídico',
    application: 'Regulação da glicemia'
  },
  {
    slug: 'cafeina',
    name: 'Cafeína',
    formula: 'C8H10N4O2',
    application: 'Estimulante do sistema nervoso central'
  },
  {
    slug: 'acido-latico',
    name: 'Ácido Lático',
    formula: 'C3H6O3',
    application: 'Metabolismo anaeróbico e indústria alimentícia'
  }
];