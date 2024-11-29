const Curso = require('../models/Curso');

const cursoController = {
  // Listar todos os cursos
  listarCursos: async (req, res) => {
    try {
      const cursos = await Curso.find().populate('disciplinas turmas'); // Popula os relacionamentos
      res.status(200).json(cursos);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar cursos', error });
    }
  },

  // Obter um curso por ID
  obterCursoPorId: async (req, res) => {
    try {
      const curso = await Curso.findById(req.params.id).populate('disciplinas turmas');
      if (!curso) {
        return res.status(404).json({ message: 'Curso não encontrado' });
      }
      res.status(200).json(curso);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter curso', error });
    }
  },

  // Criar um novo curso
  criarCurso: async (req, res) => {
    try {
      const { nome, duracao, descricao, disciplinas, turmas } = req.body;
      const novoCurso = new Curso({ nome, duracao, descricao, disciplinas, turmas });
      await novoCurso.save();
      res.status(201).json(novoCurso);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar curso', error });
    }
  },

  // Atualizar um curso por ID
  atualizarCurso: async (req, res) => {
    try {
      const { nome, duracao, descricao, disciplinas, turmas } = req.body;
      const cursoAtualizado = await Curso.findByIdAndUpdate(
        req.params.id,
        { nome, duracao, descricao, disciplinas, turmas },
        { new: true }
      );
      if (!cursoAtualizado) {
        return res.status(404).json({ message: 'Curso não encontrado' });
      }
      res.status(200).json(cursoAtualizado);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar curso', error });
    }
  },

  // Remover um curso por ID
  removerCurso: async (req, res) => {
    try {
      const cursoRemovido = await Curso.findByIdAndDelete(req.params.id);
      if (!cursoRemovido) {
        return res.status(404).json({ message: 'Curso não encontrado' });
      }
      res.status(200).json({ message: 'Curso removido com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao remover curso', error });
    }
  }
};

module.exports = cursoController;
